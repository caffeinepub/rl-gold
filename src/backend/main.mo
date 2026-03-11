import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactMessage {
    public func compareByTimestamp(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message1.timestamp, message2.timestamp);
    };
  };

  let messageStore = Map.empty<Int, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text, timestamp : Int) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp;
    };
    messageStore.add(timestamp, contactMessage);
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    if (messageStore.isEmpty()) {
      Runtime.trap("No messages found in the database. ");
    };
    messageStore.values().toArray().sort(ContactMessage.compareByTimestamp);
  };
};
