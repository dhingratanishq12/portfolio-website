# How to Update Your Portfolio Website

This guide explains how to make changes to your portfolio website without needing to modify code.

## Content Structure

All website content is stored in a single JSON file located at:
```
/src/data/content.json
```

This file contains all the text, links, and image paths used throughout the website, organized by section.

## How to Edit Content

1. Open the `content.json` file in any text editor
2. Find the section you want to update
3. Change the text or image paths as needed
4. Save the file
5. Rebuild the website to see your changes

## Content Sections

### General Information
```json
"general": {
  "name": "Smriti Sharma",
  "title": "Fashion Designer",
  "tagline": "Traditional Luxury, Contemporary Style"
}
```

### About Section
```json
"about": {
  "paragraphs": [
    "First paragraph text here",
    "Second paragraph text here",
    "Third paragraph text here"
  ],
  "photoPath": "/images/designer_photo.jpg"
}
```

### Designs Section
The designs section is divided into two categories: traditional and modern. Each design has:
- id: A unique identifier (number)
- title: The name of the design
- description: A brief description
- image: Path to the image file

```json
"designs": {
  "traditional": [
    {
      "id": 1,
      "title": "Majesty Arch",
      "description": "Description text here",
      "image": "/images/majesty_arch_placeholder.jpg"
    },
    // More designs...
  ],
  "modern": [
    // Modern designs follow the same format
  ]
}
```

### Contact Information
```json
"contact": {
  "email": "contact@smritisharma.com",
  "phone": "+1234567890",
  "introText": "Interested in collaborating or learning more about my work? Feel free to reach out."
}
```

## Adding New Designs

To add a new design:
1. Add a new image to the `/public/images/` folder
2. Open `content.json`
3. Add a new object to either the "traditional" or "modern" array:
```json
{
  "id": 7,  // Use the next available ID number
  "title": "Your New Design",
  "description": "Description of your new design",
  "image": "/images/your_new_image.jpg"
}
```

## Changing Images

1. Add your new images to the `/public/images/` folder
2. Update the image paths in `content.json` to point to your new images

## Need Help?

If you need assistance with more complex changes, please contact your web developer for support.
