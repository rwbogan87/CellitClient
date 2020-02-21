import React, { Component } from 'react'
import {Pane, Button, Text} from 'evergreen-ui'

export class CartItem extends Component {
    render() {
        return (
            <Pane>
                 <Pane background="tint1" padding={24} marginBottom={16}><Text>Item </Text></Pane>
                    <Pane >
                        <Pane justifyContent="space-between" display='flex'background="tint2" padding={24} ><Text>Item description and $</Text> <Button marginLeft = {24}>Purchase</Button></Pane>
                    </Pane>
            </Pane>
        )
    }
}

export default CartItem
