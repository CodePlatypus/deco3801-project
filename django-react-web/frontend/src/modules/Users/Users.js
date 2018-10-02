import * as React from 'react';
import { Card, Segment, Checkbox, Form, Container, Grid, Icon, Image, Dimmer, Loader } from 'semantic-ui-react';

import UsersStore from './UsersStore';

import { observer } from 'mobx-react';

@observer
export default class Users extends React.Component {

    /* Set initial states */
    componentDidMount() {
        UsersStore.setLoading(true);
        UsersStore.clearUsers();
        UsersStore.setup();
    }

    renderLoader = () => {
        console.log(UsersStore.loading);
        if (UsersStore.loading) {
            return (
                <div>
                    <Loader active inline='centered'>
                        Loading
                    </Loader>
                </div>
            )
        }
        return (<div></div>)
    }

    render() {

        const { users } = UsersStore;
        
        const loader = this.renderLoader();

        return (
            <div className='p-5 text-left'>
                {loader}
                <Grid columns={4}>
                    {/* Map each user to the following layout */}
                    {users.map((user, index) => {
                        return (
                            <Grid.Column key={index}>
                                <Card>
                                    <Image className='p-3' src='http://www.nyan.cat/cats/original.gif' />
                                    <Card.Content>
                                        <Card.Header>{user.firstname + ' ' + user.lastname}</Card.Header>
                                        <Card.Description>
                                            <p>{user.position}</p>
                                            <p>{user.email}</p>
                                            <p>{user.username}</p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        );
                    })}
                </Grid>

            </div>
        )
    }
}