module.exports = {
  name: 'docs',
  description: 'Generate documentation',
  async execute(context) {
    const { query, tools } = context;
    
    // Add your documentation generation logic here
    console.log('Generating docs for:', query);
    
    return {
      documentation: ''
    };
  }
};
