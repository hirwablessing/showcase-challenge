import { configure } from '@kadira/storybook' 
 
function loadStories() { 
  require('../src/stories/list') 
} 
 
configure(loadStories, module) 
