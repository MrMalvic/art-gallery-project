import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import {About} from '/imports/ui/About.jsx';
import {Painting} from '/imports/ui/Painting.jsx';
import {Sculpture} from '/imports/ui/Sculpture.jsx';
import {Drawing} from '/imports/ui/Drawing.jsx';
import {Craft} from '/imports/ui/Craft.jsx';
import ArtSignUp from '/imports/ui/invisNavBar/ArtSignUp.jsx';
import LogIn from '/imports/ui/invisNavBar/LogIn.jsx';
import { Pops } from  '/imports/ui/Pops.jsx';
import { Paul } from '/imports/ui/Paul.jsx';
import {Titans} from '/imports/ui/Titans.jsx';
import { Pierre } from '/imports/ui/Pierre.jsx';
import {Claude} from '/imports/ui/Claude.jsx';
import { Diego } from '/imports/ui/Diego.jsx';
import { Edvard } from '/imports/ui/Edvard.jsx';
import { Vincent } from '/imports/ui/Vincent.jsx';
import { Raphael } from '/imports/ui/Raphael.jsx';
import { Newartist }  from '/imports/ui/Newartist.jsx';






route('/', Home);
route('/contact', ContactUs);
route('/about', About);
route('/painting', Painting);
route('/sculpture', Sculpture);
route('/drawing', Drawing);
route('/craft', Craft);
route('/SignUp', ArtSignUp);
route('/LogIn', LogIn);
route('/Pops', Pops);
route('/paul', Paul);
route('/titans', Titans);
route('/Pierre', Pierre);
route('/newartist', Newartist );
route('/vincent', Vincent);
route('/raphael', Raphael);
route('/edvard', Edvard);
route('/claude', Claude);
route('/diego', Diego);
