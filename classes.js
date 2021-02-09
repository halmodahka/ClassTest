class product {
    constructor(name, number) {
      this.ProductName = name;
      this.ProductNumber = number;
    }
    ProductDescription = () => console.log(`This is ${this.ProductName}, version ${this.ProductNumber}, and it is around ${this.ProductPrice}KD`);

};
    
    class Mobile extends product {
        constructor(name, number, price) {
          super(name, number);
          this.ProductPrice = price;
        }};

        const mobile = new Mobile("Samsung","2020", "350");
        mobile.ProductDescription();

        class Computer extends product {
            constructor(name, number, price) {
              super(name, number);
              this.ProductPrice = price;
            }};

            const computer = new Computer("iMac", "2021", "750");
            computer.ProductDescription();

