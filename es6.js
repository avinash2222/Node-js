class User
{
    constructor (user, name, password)
    {
        this.user=user;
        this.name=name;
        this.password=password;
    }
    static countUser()
    {
        console.log("there are 50 user");
    }
    register()
    {
        console.log(this.name+" is registered");
    }
}

let bob=new User("avi123","aviansh","123");
bob.register();

class Member extends User{
    constructor(user, name, password, memberpackage)
    {
        super(user, name, password);
        this.package=memberpackage;
    }
    getPackage()
    {
        console.log()
    }

}