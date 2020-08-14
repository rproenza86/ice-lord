import React, { Suspense, lazy } from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { multilanguage } from 'redux-multilanguage';

import ScrollToTop from '../../helpers/scroll-top';
import { ToastProvider } from 'react-toast-notifications';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

const HomeOrganicFood = lazy(() => import('../template/pages/home/HomeOrganicFood'));

function App() {
    return (
        <ToastProvider placement="bottom-left">
            <BreadcrumbsProvider>
                <Router>
                    <ScrollToTop>
                        <Suspense
                            fallback={
                                <div className="flone-preloader-wrapper">
                                    <div className="flone-preloader">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            }
                        >
                            <Switch>
                                <Route
                                    exact
                                    path={process.env.PUBLIC_URL + '/'}
                                    component={HomeOrganicFood}
                                />
                                {/* Homepage */}
                                <Route
                                    path={process.env.PUBLIC_URL + '/home'}
                                    component={HomeOrganicFood}
                                />
                            </Switch>
                        </Suspense>
                    </ScrollToTop>
                </Router>
            </BreadcrumbsProvider>
        </ToastProvider>
    );
}

export default connect()(multilanguage(App));
