module.exports = {
  name: 'test-gen',
  description: 'Generate tests for code',
  async execute(context) {
    const { query, tools } = context;
    
    // Add your test generation logic here
    console.log('Generating tests for:', query);
    
    return {
      testFile: '',
      tests: []
    };
  }
};
