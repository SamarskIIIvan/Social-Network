import {addPostAC, deletePostAC, PostType, profileReducer, ProfileType} from "./profile-reducer";
import React from "react";

const state = {
    posts: [{id: 1, message: "Hello! How are you?:)", likesCount: 1000},
        {id: 2, message: "Hi i am programmer!", likesCount: 100},
        {id: 3, message: "Hi!", likesCount: 2},] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}
test('length of posts should be incremented', () => {
    // 1. text data
    // 2. action
    // 3. expectation
    let action = addPostAC("I am programmer")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    // 1. text data
    // 2. action
    // 3. expectation
    let action = addPostAC("I am programmer")
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe("I am programmer")

});


test('after deleting length of messages should be decrement', () => {
    // 1. text data
    // 2. action
    // 3. expectation
    let action = deletePostAC(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)

});


test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. text data
    // 2. action
    // 3. expectation
    let action = deletePostAC(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)

});

