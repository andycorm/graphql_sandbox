import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);

export default schema;