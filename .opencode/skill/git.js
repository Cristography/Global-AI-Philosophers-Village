module.exports = {
  name: 'git',
  description: 'Helper for git operations',
  async execute(context) {
    const { query, tools } = context;
    
    // Add your git helper logic here
    console.log('Git operation:', query);
    
    return {
      command: '',
      output: ''
    };
  }
};
