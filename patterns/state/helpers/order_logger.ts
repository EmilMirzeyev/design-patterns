export class OrderLogger {
  static logAction(action: string, state: string) {
    console.log(`${action} in state: ${state}`);
  }
}
