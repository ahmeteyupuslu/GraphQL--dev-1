const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { events, users, participants, locations } = require("./data.json");

const typeDefs = `
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    user: User!
    participants: [Participant!]!
    location: Location!
    }

    type Location {
        id: ID!
        name : String!
        desc : String!
        lat : Float!
        lng : Float!
}

    type Participant {
        id: ID!
        user_id: ID!
        event_id: ID!
        username: String
    }

    type Query {
        #user
        users: [User!]!
        user(id: ID!) : User!
        
        #event
        events: [Event!]!
        event(id: ID!): Event!

        #location
        locations: [Location!]!
        location(id: ID!): Location!

        #participant
        participants: [Participant!]!
        participant(id: ID!): Participant!

    }
`;

const resolvers = {
  Query: {
    //user
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === parseInt(args.id)),

    //event
    events: () => events,
    event: (parent, args) =>
      events.find((event) => event.id === parseInt(args.id)),

    //location
    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id === parseInt(args.id)),

    //participant
    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id === parseInt(args.id)),
  },
  Event: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    participants: (parent) =>
      participants.filter(
        (participant) => participant.event_id === parseInt(parent.id)
      ),
    location: (parent) =>
      locations.find(
        (location) => location.id === parseInt(parent.location_id)
      ),
  },
  Participant: {
    username: (parent) => {
      const user = users.find((user) => user.id === parseInt(parent.user_id));
      return user ? user.username : null;
    },
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer();
