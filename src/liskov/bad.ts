class Bird{
  public fly(){
    console.log('flying')
  }
}

class Pigeons extends Bird{

}

class Ostrich extends Bird{

} 

const pigeons = new Pigeons1()
pigeons.fly()

const ostrich = new Ostrich()
ostrich.fly() // wrong