
interface Strategy1{
    void run1();
}

interface Strategy2{
    void run2();
}


class HighTrustStrategy1 implements Strategy1{
    public void run1(){
        System.out.println("Run factory 1 high trust object ");
    }
}

class MiddleTrustStrategy1 implements Strategy1{
    public void run1(){
        System.out.println("Run factory 1 middle trust object");
    }
}

class LowTrustStrategy1 implements Strategy1{
    public void run1(){
        System.out.println("Run factory 1 low trust object");
    }
}

class DefaultTrustStrategy1 implements Strategy1{
    public void run1(){
        System.out.println("Run factory 1 default trust object");
    }
}

class HighTrustStrategy2 implements Strategy2{
    public void run2(){
        System.out.println("Run factory 2 high trust object ");
    }
}

class MiddleTrustStrategy2 implements Strategy2{
    public void run2(){
        System.out.println("Run factory 2 middle trust object");
    }
}

class LowTrustStrategy2 implements Strategy2{
    public void run2(){
        System.out.println("Run factory 2 low trust object");
    }
}

class DefaultTrustStrategy2 implements Strategy2{
    public void run2(){
        System.out.println("Run factory 2 default trust object");
    }
}


class SecurityCredentials{
    public String text="";

    public SecurityCredentials(String text) {
        this.text=text;
    }
}

abstract class AbstractSecureFactory{
    static private AbstractSecureFactory defaultInstance;
    static AbstractSecureFactory getInstance(){
        return defaultInstance;
    }

    static void setInstance(AbstractSecureFactory newInstance){
        defaultInstance=newInstance;
    }

    abstract Strategy1 getStrategy1(SecurityCredentials givenCredentials);
    abstract Strategy2 getStrategy2(SecurityCredentials givenCredentials);
}

////

class ConcreteSecureFactory1 extends AbstractSecureFactory {


    @Override
    public Strategy1 getStrategy1(SecurityCredentials givenCredentials) {
        System.out.println("This is ConcreteSecureFactory1");
        switch (givenCredentials.text) {
            case "high":
                return new HighTrustStrategy1();
            case "middle":
                return new MiddleTrustStrategy1();
            case "low":
                return new LowTrustStrategy1();
        }
        return new DefaultTrustStrategy1();
    }

    @Override
    Strategy2 getStrategy2(SecurityCredentials givenCredentials) {
        return null;
    }


}

class ConcreteSecureFactory2 extends AbstractSecureFactory {


    @Override
    Strategy1 getStrategy1(SecurityCredentials givenCredentials) {
        return null;
    }

    @Override
    public Strategy2 getStrategy2(SecurityCredentials givenCredentials) {
        System.out.println("This is ConcreteSecureFactory2");
        switch (givenCredentials.text) {
            case "high":
                return new HighTrustStrategy2();
            case "middle":
                return new MiddleTrustStrategy2();
            case "low":
                return new LowTrustStrategy2();
        }
        return new DefaultTrustStrategy2();
    }
}


public class secureStrategyFactory {
    public static void main(String args[]){

        AbstractSecureFactory.setInstance(new ConcreteSecureFactory1());

        //just to try getInstance and setInstance work or not
        System.out.println(AbstractSecureFactory.getInstance().toString());
        AbstractSecureFactory.setInstance(new ConcreteSecureFactory2());
        System.out.println(AbstractSecureFactory.getInstance().toString());

        //get the ConcreteSecureFactory
        AbstractSecureFactory currentFactory=AbstractSecureFactory.getInstance();
        //AbstractSecureFactory newFactory=new ConcreteSecureFactory1();

        //create  object
        SecurityCredentials givenCredentials=new SecurityCredentials("high");
        Strategy1 secureObject1= (new ConcreteSecureFactory1()).getStrategy1(givenCredentials);
        secureObject1.run1();


        Strategy2 secureObject2= (new ConcreteSecureFactory2()).getStrategy2(givenCredentials);
        secureObject2.run2();

    }
}

