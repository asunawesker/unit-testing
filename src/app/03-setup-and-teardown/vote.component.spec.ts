import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    let component = new VoteComponent();
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});