import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import StatusPage from './pages/admin/status';
import CreditsPage from './pages/admin/credits';
import DashboardLayout from './dashboard/layout';
import ArchivesPage from './pages/admin/archives';
import SettingsPage from './pages/admin/settings';
import DocumentationPage from './pages/admin/documentation';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/admin/archives">
            <ArchivesPage />
          </Route>
          <Route exact path="/admin/credits">
            <CreditsPage />
          </Route>
          <Route exact path="/admin/documentation">
            <DocumentationPage />
          </Route>
          <Route exact path="/admin/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/admin/status">
            <StatusPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
