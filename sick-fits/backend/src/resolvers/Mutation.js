const Mutations = {
    createDog(parent, args, context, info) {
        global.dogs = global.dogs || [];
        const dog = {name: args.name};
        global.dogs.push(dog);

        return dog;
    }
};

module.exports = Mutations;
