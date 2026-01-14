# Assets Folder

This folder contains downloadable files for the website.

## CV PDF File

**Required File**: `CV_12_2025_DSHUNG.pdf`

### How to Add Your CV

1. **Convert your CV to PDF** (if not already in PDF format):
   - Open `CV_12_2025_DSHUNG.docx` in Microsoft Word
   - Go to File → Save As
   - Choose "PDF" as the file format
   - Save as `CV_12_2025_DSHUNG.pdf`

2. **Optimize for web** (optional but recommended):
   - Use Adobe Acrobat or online tools to compress the PDF
   - Aim for < 2MB file size for faster downloads
   - Ensure text is selectable (not scanned images)

3. **Add to this folder**:
   - Place `CV_12_2025_DSHUNG.pdf` in this `assets` folder
   - The website will automatically link to it

### File Naming

The filename must match exactly what's referenced in `index.html` (line 107):
```html
<a href="assets/CV_12_2025_DSHUNG.pdf" class="btn btn-download" download>
```

If you rename the file, update the path in `index.html` accordingly.

### GitHub Upload

When uploading to GitHub:
1. Navigate to the `assets` folder in your repository
2. Click "Add file" → "Upload files"
3. Drag and drop your PDF file
4. Commit with message: "Add CV PDF"

Your CV will then be downloadable from the website!
