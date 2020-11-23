class User{
    constructor(surname){
       this.surname = '1'
       this.surname2 = '2'
       this.surname3 = '3'
    }
    #private = 'gg.com'
    
    set name(name){
        alert('first '+this.#private)
        this._name=name.trim().toUpperCase()
    }
    get name(){

        
        return this._name
    }
    get private(){
        return this.#private
    }
}

const student = new User()
student.name = '                        SAshka'
console.log(student)
console.log(student.name)

const schoolar = new User()
console.log(schoolar)
console.log(schoolar.private)

const dino = new User()
console.log(dino)

const example = new User (
    {
        1:'1',2:'2',3:'99'
    }
 )

 console.log(example)
  console.log(example.surname,example.surname2,example.surname3)