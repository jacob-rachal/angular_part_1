export interface TodoInterface {
  //day 4, interfaces check to see that the stuff for the class is fulfilled / satisfied.
  id: number;
  name: string;
  tags: string[];
  isCompleted?: boolean; // can be optional here in the interface
  isDeleted?: boolean;  // the ? acts as our OPTIONAL flag.
}
