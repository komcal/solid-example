class WalkOnlyBord{

}

class FlyingBird{
    public fly(){
      console.log('flying')
    }
}

class Pigeons extends FlyingBird{

}

class Ostrich extends WalkOnlyBord{

} 

const pigeons = new Pigeons()

pigeons.fly()
const ostrich = new Ostrich()
