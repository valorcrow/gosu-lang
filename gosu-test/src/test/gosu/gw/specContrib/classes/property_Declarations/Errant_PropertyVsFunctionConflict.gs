package gw.specContrib.classes.property_Declarations

// IDE-1138
class Errant_PropertyVsFunctionConflict {

  class Class1 {
    function getMyProp1() : String { return null }
    function setMyProp2(s: String) {}
  }

  class SubClass1 extends Class1 {
    property get MyProp1() : String { return null }   //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
    property set MyProp2(s: String) { }               //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT, MSG_PROPERTY_AND_FUNCTION_CONFLICT_UPON_REIFICATION
  }


  class Class2 {
    function getMyProp1() : String { return null }
    function setMyProp2(s: String) {}
  }

  class SubClass2 extends Class2 {
    var myProp1 : String as MyProp1    //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
    var myProp2 : String as MyProp2    //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT, MSG_PROPERTY_AND_FUNCTION_CONFLICT_UPON_REIFICATION
  }

  class Class3 {
    var myProp : String as MyProp
  }

  class SubClass3 extends Class3 {
    function getMyProp() : String { return null }  //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
    function setMyProp(s: String) {}               //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
  }

  class SubClass4 extends JavaClass2 {
    function getText1(): String { return null }  //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
  }

  class Class5 {
    property get prop () : String {  return null }
  }

  class SubClass5 extends Class5 {
    function getProp() :  int { return 0 }
  }

  class Class6 {
    function getProp(): String { return null }
  }

  class SubClass6 extends Class6 {
    property get prop(): String { return null }
  }

  // IDE-1192
  class SubClass7 extends JavaClass3 {
    function setText(s: String) {}         //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
    override property set Text2(s: String) {}

  }

  class SubClass8 extends JavaClass3 {
    var prop1: String as Text             
    var prop2: String as Text2
  }

  class Class9 {
    function getProp1() : void {}
  }
  class SubClass9 extends Class9 {
    var something : String as Prop1      //## issuekeys: MSG_PROPERTY_AND_FUNCTION_CONFLICT
  }
}
