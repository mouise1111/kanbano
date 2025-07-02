export class BoardMember {
 boardId: string;
 userId: string;
 role: 'owner' | 'admin' | 'member';
 joinedAt: Date;
 invitedBy: string; // userId who invited this member
 isActive: boolean; // for soft deletion

 constructor(boardId: string, userId: string, role: 'owner' | 'admin' | 'member', invitedBy: string) {
   this.boardId = boardId;
   this.userId = userId;
   this.role = role;
   this.invitedBy = invitedBy;
   this.joinedAt = new Date();
   this.isActive = true;
 }

 updateRole(newRole: 'owner' | 'admin' | 'member'): void {
   if (this.role === 'owner' && newRole !== 'owner') {
     throw new Error("Cannot change owner role. Transfer ownership first.");
   }
   this.role = newRole;
 }

 deactivate(): void {
   if (this.role === 'owner') {
     throw new Error("Cannot deactivate board owner");
   }
   this.isActive = false;
 }

 reactivate(): void {
   this.isActive = true;
 }

 canEdit(): boolean {
   return this.isActive && (this.role === 'owner' || this.role === 'admin');
 }

 canInvite(): boolean {
   return this.isActive && (this.role === 'owner' || this.role === 'admin');
 }

 canDelete(): boolean {
   return this.isActive && this.role === 'owner';
 }
}
