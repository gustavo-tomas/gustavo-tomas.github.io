// Import sections
import sections from "./assets/json/sections.json" assert { type: 'json' };

// Create all sections
window.onload = () => {
  const main = document.querySelector('main');

  sections.sections.forEach(section => {
    main.append(
      createSection(section.title, section.text, section.items)
    );
  });
}

// Create a section with optional items
const createSection = (title, text, items) => {
  
  // Section title and text
  // ---------------------------------------------------------------------------
  const section = document.createElement('section');
  section.setAttribute('class', 'section');
  
  const div = document.createElement('div');
  
  const sectionTitle = document.createElement('h2');
  sectionTitle.setAttribute('class', 'section-title');
  sectionTitle.textContent = title;
  
  const sectionText = document.createElement('p');
  sectionText.textContent = text;

  div.append(sectionTitle, sectionText);
  section.append(div);

  // Section items
  // ---------------------------------------------------------------------------
  if (items.length == 0) {
    return section;
  }

  const sectionItems = document.createElement('div');
  sectionItems.setAttribute('class', 'section-items');

  items.forEach(item => {
    const sectionItem = document.createElement('div');
    sectionItem.setAttribute('class', 'section-item');
  
    const itemDescription = document.createElement('div');
    itemDescription.setAttribute('class', 'item-description');
  
    const link = document.createElement('a');
    link.href = item.link;
    link.target = '_blank';
    
    const name = document.createElement('h2');
    name.textContent = item.name;
    
    const text = document.createElement('p');
    text.textContent = item.text;
    
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = '';
  
    link.append(name, text);
    itemDescription.append(link);
  
    sectionItem.append(itemDescription, image);
    sectionItems.append(sectionItem);
  });

  section.append(sectionItems);

  return section;
}
