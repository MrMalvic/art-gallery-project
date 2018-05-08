import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import {About} from '/imports/ui/About.jsx';


route('/', Home);
route('/contact', ContactUs);
route('/about', About);
