import React, { Component } from 'react'
import { Pane, Button, Text } from 'evergreen-ui';


export class StoreItems extends Component {
    render() {
        return (
            <div>
                <Pane>
                    <Pane className="default-styles" padding={24} marginBottom={16}><Text color="#eeeeee">Item </Text></Pane>
                    <Pane >
                        <Pane justifyContent="space-between" display='flex' padding={24} ><Text color="#eeeeee">Item description and $</Text> <Button marginLeft = {24}>Purchase</Button></Pane>
                    </Pane>
               
               </Pane>
            </div>
        )
    }
}

export default StoreItems
