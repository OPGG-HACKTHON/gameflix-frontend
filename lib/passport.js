import passport from 'passport';
import { Strategy } from 'passport-steam';

const origin =
    process.env.NODE_ENV === 'production' ? 'https://www.gameflix.link' : 'http://localhost:3000';

passport.use(
    new Strategy(
        {
            returnURL: `${origin}/api/auth/steam/return`,
            realm: origin,
            apiKey: '3F2AA106508AA6EB714C074E2CE0F277',
        },
        function (identifier, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {
                // To keep the example simple, the user's Steam profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Steam account with a user record in your database,
                // and return that user instead.
                profile.identifier = identifier;
                return done(null, profile);
            });
        }
    )
);

export default passport;
