import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GameDetail from './';

export default {
    title: 'organisms/GameDetail',
    component: GameDetail,
} as ComponentMeta<typeof GameDetail>;

const Template: ComponentStory<typeof GameDetail> = (args) => <GameDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
    slug: 'factorio',
    name: 'Factorio',
    release_at: 1256605200,
    updated_at: 1626713554,
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tfy.jpg',
    url: 'string',
    genres: ['moba'],
    rating_external: 80.35918701514501,
    rating_external_count: 501,
    platforms: ['win', 'mac'],
    summary: `StarCraft: Remastered is a reverently crafted modernization of Blizzard
                        Entertainment’s original sci-fi real-time strategy game. StarCraft:
                        Remastered will offer a full graphical overhaul of the original StarCraft
                        and the StarCraft: Brood War expansion, bringing a modern look and feel to
                        the timeless classic with widescreen UHD support for up to 4K resolution.
                        StarCraft: Remastered will include all of StarCraft’s and Brood War’s
                        campaign missions with enhanced storytelling via new comic-book style
                        interludes. While this rejuvenated version of StarCraft is locked and loaded
                        for the modern era, the gameplay and balance have been precisely preserved,
                        for an experience that will feel identical to veteran players. 4K Ultra HD
                        Graphics and Upgraded Audio: StarCraft: Remastered will include
                        high-resolution unit models, buildings, doodads, and tilesets, as well as
                        high-fidelity music and sound effects to bring the original game into the
                        modern era, while retaining the classic StarCraft style. Same Timeless
                        Gameplay: The gameplay balance and idiosyncrasies have been painstakingly
                        preserved from the original game. Mutalisk stacking, magic-boxing, unit
                        pathfinding, control-group limitations, and more will all remain intact,
                        allowing veteran players to enjoy playing and watching high-level
                        competitive matches as before. Includes Original and Expansion Campaigns:
                        Return to the planetary battlefields of the war-torn Koprulu Sector and
                        command the forces of the terran, zerg, and protoss across more than 50
                        story-driven single-player missions. Fall in Love Again: Relive the epic
                        saga of some of gaming’s most memorable and beloved heroes and villains,
                        including Marshal Jim Raynor, Lieutenant Sarah Kerrigan, and Praetor Fenix.
                        Enhanced Storytelling: Original cinematics will be improved to 1080p
                        resolution, while mission interludes and introductions will feature new
                        comic-book style illustrations. Blizzard’s Gaming Network Brings a Bevy of
                        Features: In addition to accurate matchmaking and enhanced ladder
                        functionality, players will also be able to stay in touch with and chat with
                        friends playing other Blizzard games. The classic functionality of named
                        custom games and custom game lobbies will be retained, for the familiarity
                        of long-time StarCraft players. Localized in 13 Languages: English, German,
                        French, Brazilian Portuguese, Spanish (LatAm), Spanish (European), Polish,
                        Italian, Russian, Korean, Simplified Chinese, Traditional Chinese, and
                        Japanese.`,
    involved_companies: ['Wube Software LTD'],
};
