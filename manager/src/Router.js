import React from 'react';
import { Scene, Router, Actions, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                        key='login'
                        title='Please Login'
                        component={LoginForm}
                    />
                </Scene>

                <Scene key='main'>
                    {/* <Drawer
                        hideNavBar
                        key="drawer"
                        onExit={() => {
                            console.log('Drawer closed');
                        }}
                        onEnter={() => {
                            console.log('Drawer opened');
                        }}
                        contentComponent={DrawerContent}
                        drawerImage={MenuIcon}
                        drawerWidth={300}
                    > */}
                        <Scene
                            rightTitle='Add'
                            onRight={() => Actions.createEmployee()}
                            key='employeeList'
                            title='Employee List'
                            component={EmployeeList}
                            initial
                        />
                        <Scene
                            key='createEmployee'
                            title='Create Employee'
                            component={CreateEmployee}
                        />
                    {/* </Drawer> */}
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
