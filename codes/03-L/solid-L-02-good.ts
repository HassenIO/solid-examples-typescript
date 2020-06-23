interface IContactService {
  contact(person: any): void;
}

class EmailService implements IContactService {
  contact(person: any): void {
    // Do some email stuff
  }
}

class SMSService implements IContactService {
  contact(person: any): void {
    // Do some SMS stuff
  }
}

class ContactController {
  constructor(private contactService: IContactService) {}

  public contact(person: any): void {
    this.contactService.contact(person);
  }
}

const contactController1 = new ContactController(new EmailService());
contactController1.contact({
  /* person info */
});

const contactController2 = new ContactController(new SMSService());
contactController2.contact({
  /* person info */
});
