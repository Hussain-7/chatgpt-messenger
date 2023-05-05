interface Message {
  text: string;
  createdAt: admin.firestor.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
