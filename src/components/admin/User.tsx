import React, { Component } from 'react'
import { object } from 'prop-types'

interface IProps{
    user: any;
}
const User =(props: IProps)=> {

        return (
            <div>
              
                <h4>{props.user.firstname} {props.user.lastname}</h4>
                <h6>id: {props.user.id} email: {props.user.email}</h6>
                <h6>{props.user.stree}</h6>
                <h6>{props.user.city} {props.user.zip}</h6>
                <h6>{props.user.phone}</h6>

        
            </div>
        )
}

export default User
