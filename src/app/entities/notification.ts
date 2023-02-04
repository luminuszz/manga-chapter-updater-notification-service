import { randomUUID } from 'node:crypto';

export type NotificationProps = {
  recipient_id: string;
  read_at: Date | null | undefined;

  content: string;
};

export class Notification {
  private readonly _id: string;

  private readonly _created_at: Date;

  constructor(private readonly props: NotificationProps, id?: string) {
    this._id = id || randomUUID();
    this._created_at = new Date();
  }

  get recipient_id(): string {
    return this.props.recipient_id;
  }

  get read_at(): Date | null | undefined {
    return this.props.read_at;
  }
  set read_at(updated_at: Date | null | undefined) {
    this.props.read_at = updated_at;
  }

  get content(): string {
    return this.props.content;
  }

  get id(): string {
    return this._id;
  }

  get created_at(): Date {
    return this.created_at;
  }
}
