export class User {
 id: string;
 username: string;
 email: string;
 passwordHash: string;
 createdAt: Date;
 updatedAt: Date;

 constructor(id: string, username: string, email: string, passwordHash: string) {
   this.id = id;
   this.username = username;
   this.email = email;
   this.passwordHash = passwordHash;
   this.createdAt = new Date();
   this.updatedAt = new Date();
 }

 updateUsername(newUsername: string): void {
   if (!newUsername || !newUsername.trim()) {
     throw new Error("Username cannot be empty");
   }
   if (newUsername.length < 3) {
     throw new Error("Username must be at least 3 characters");
   }
   this.username = newUsername.trim();
   this.updatedAt = new Date();
 }

 updateEmail(newEmail: string): void {
   if (!newEmail || !newEmail.trim()) {
     throw new Error("Email cannot be empty");
   }
   if (!this.isValidEmail(newEmail)) {
     throw new Error("Invalid email format");
   }
   this.email = newEmail.toLowerCase().trim();
   this.updatedAt = new Date();
 }

 updatePassword(newPasswordHash: string): void {
   if (!newPasswordHash || !newPasswordHash.trim()) {
     throw new Error("Password hash cannot be empty");
   }
   this.passwordHash = newPasswordHash;
   this.updatedAt = new Date();
 }

 private isValidEmail(email: string): boolean {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 }
}
