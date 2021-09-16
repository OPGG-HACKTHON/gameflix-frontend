import React, { FunctionComponent, useCallback, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import { GameInfo } from 'types/responseInterface';
import { format } from 'date-fns';
import Button from 'components/atoms/Button';
import UserContext from 'context/user';
import axios from 'axios';
import { END_POINT } from '../../../constant';

const GameDetail: FunctionComponent<GameInfo> = (props) => {
    const { slug, cover, name, description, release_at, developer, genres, platforms, background } =
        props;
    const { user, setUser } = useContext(UserContext);
    const myGame = useMemo(() => user?.games.find((game) => game.slug === slug), [user, slug]);
    const removeGame = useCallback(() => {
        const token = window.localStorage.getItem('token');
        if (!user || !token) {
            return;
        }
        axios.delete(`${END_POINT}/users/${user.id}/games/${slug}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUser?.({ ...user, games: user.games.filter((game) => game.slug !== slug) });
    }, [user, slug, setUser]);
    const addGame = useCallback<React.ReactEventHandler<HTMLButtonElement>>(async () => {
        if (!user) {
            return;
        }
        const token = window.localStorage.getItem('token');
        const res = await axios.post(
            `${END_POINT}/users/${user.id}/games`,
            {
                slug,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setUser?.({ ...user, games: [...user.games, res.data] });
    }, [user, slug, setUser]);
    return (
        <GameDetailContainer>
            <ScreenShotWrapper>
                <img src={background} alt="game image" height="799px" />
                <Overlay />
            </ScreenShotWrapper>
            <DetailContainer>
                <CoverWrapper>
                    <img src={cover} alt="game cover" />
                    {myGame ? (
                        <>
                            <Button category={'danger'} fullWidth onClick={removeGame}>
                                내 라이브러리에서 삭제
                            </Button>
                            <p>
                                <InfoLabel>추가된 스토어:</InfoLabel>
                                <br />
                                <span>{myGame.store}</span>
                            </p>
                        </>
                    ) : (
                        <Button category={'primary'} fullWidth onClick={addGame}>
                            내 라이브러리에 추가
                        </Button>
                    )}
                </CoverWrapper>
                <InformationContainer>
                    <GameTitle>{name}</GameTitle>
                    <CompaniesInformation>{developer}</CompaniesInformation>
                    <GameInformation>
                        <InfoLabel>출시: </InfoLabel>
                        {format(new Date(release_at), 'MMM d, yyyy')}
                        <br />
                        <InfoLabel>장르: </InfoLabel>
                        {genres}
                        <br />
                        <InfoLabel>플랫폼: </InfoLabel>
                        {platforms.join(', ')}
                    </GameInformation>
                    <p>{description}</p>
                </InformationContainer>
            </DetailContainer>
        </GameDetailContainer>
    );
};

export default GameDetail;

const GameDetailContainer = styled.article`
    width: 1920px;
`;

const ScreenShotWrapper = styled.div`
    position: absolute;
    text-align: center;
`;

const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.19%, #000000 100%);
    margin-top: -799px;
    width: 1920px;
    height: 799px;
    position: relative;
`;

const DetailContainer = styled.div`
    display: flex;
    padding-top: 799px;
    position: relative;
    color: ${({ theme }) => theme.colors.default};
    font-size: 14px;
    line-height: 20px;
    width: 1280px;
    margin: auto;
`;

const CoverWrapper = styled.div`
    margin-top: -176px;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const InformationContainer = styled.div`
    margin-top: -78px;
`;

const GameTitle = styled.h2`
    line-height: 58px;
    margin-bottom: 36px;
    font-size: 40px;
    color: #fff;
`;

const CompaniesInformation = styled.p`
    margin: 0 0 20px 0;
    font-size: 20px;
    line-height: 29px;
    font-weight: bold;
`;

const GameInformation = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 56px 0;
`;

const InfoLabel = styled.span`
    color: #867bfb;
`;
