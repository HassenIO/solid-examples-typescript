class EmailService {
  contact(person: any): void {
    // Do some email stuff
  }
}

class SMSService {
  contact(person: any): void {
    // Do some SMS stuff
  }
}

class EmailController {
  private service: EmailService;

  constructor() {
    this.service = new EmailService();
  }

  public contact(person: any): void {
    this.service.contact(person);
  }
}

class SMSController {
  private service: SMSService;

  constructor() {
    this.service = new SMSService();
  }

  public contact(person: any): void {
    this.service.contact(person);
  }
}

const contactController1 = new EmailController();
contactController1.contact({
  /* person info */
});

const contactController2 = new SMSController();
contactController2.contact({
  /* person info */
});
