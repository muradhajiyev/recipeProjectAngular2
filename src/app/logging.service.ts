export class LoggingService {
    logStatusChange(ingredient: string) {
        console.log('A new ingredient was added: '+ ingredient);
    }
}