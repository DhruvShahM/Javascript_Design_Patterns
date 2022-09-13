function Developer(name){
    this.name=name;
    this.type="Developer";
}

function Tester(name){
    this.name=name;
    this.type="Tester";
}

function EmployeeFactory(name){
    this.create=(name,type)=>{
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name);
                break;        
        }
    }
}

function say(){
    console.log("Hi, I'm "+this.name+" and  I am a "+this.type);
}

const employeeFactory=new EmployeeFactory();
const employees=[];

employees.push(employeeFactory.create("Deep",1));
employees.push(employeeFactory.create("Nirav",2));
employees.push(employeeFactory.create("Jeep",1));
employees.push(employeeFactory.create("Meet",1));
employees.push(employeeFactory.create("Kairav",2));

employees.forEach((emp)=>{
    say.call(emp);
})