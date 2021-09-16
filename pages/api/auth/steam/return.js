import nextConnect from 'next-connect';
import passport from 'lib/passport';

const handler = nextConnect();

handler.get(passport.authenticate('steam', { session: false }), (req, res) => {
    res.redirect(`/auth/steam/${req.user.id}`);
});

export default handler;
