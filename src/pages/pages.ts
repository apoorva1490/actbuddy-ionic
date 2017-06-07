import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SchedulePage } from './schedule/schedule';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage } from './welcome/welcome';
import { CardsPage } from './cards/cards';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = SchedulePage;
export const Tab2Root = SearchPage;
export const Tab3Root = ListMasterPage;
export const Tab4Root = CardsPage;
