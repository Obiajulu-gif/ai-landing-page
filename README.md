# AI Models Tabs Component

This project is a React/Next.js component that showcases various AI models in a tabbed interface. The component allows users to navigate through different AI categories using tabs, with smooth scrolling and responsive design for both desktop and mobile views.

## Features

- **Tabbed Navigation:** Users can switch between different AI models using tabs.
- **Smooth Scrolling:** The component auto-scrolls to the selected tab.
- **Responsive Design:** Optimized for both desktop and mobile views.
- **Intersection Observer:** Automatically updates the active tab based on visibility.
- **Arrow Navigation (Mobile):** Users can navigate using left/right buttons.
- **Image Display:** Uses Next.js `Image` component for optimized loading.

## Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Lucide Icons**
- **Tailwind CSS**

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Obiajulu-gif/ai-landing-page
   ```

2. Navigate to the project directory:

   ```sh
   cd your-project
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

## Usage

Simply import and use the `AiModelsTabs` component in your Next.js page:

```tsx
import AiModelsTabs from "@/components/AiModelsTabs";

export default function Home() {
  return (
    <div>
      <AiModelsTabs />
    </div>
  );
}
```

## File Structure

```
/your-project
 ├── /components
 │   ├── AiModelsTabs.tsx
 ├── /public/logos
 │   ├── market-prediction.png
 │   ├── finance.png
 │   ├── data.png
 │   ├── content.png
 │   ├── customer.png
 ├── /styles
 │   ├── globals.css
 ├── pages
 │   ├── index.tsx
 ├── package.json
 ├── README.md
```

## Issues & Improvements

### Known Issues:
- **Mobile Image Display Fix:** Ensured images maintain aspect ratio on all screen sizes.
- **TypeScript Refinements:** Improved ref handling to prevent errors.

### Future Improvements:
- Add animations when switching tabs.
- Enhance accessibility with better keyboard navigation.

## License

This project is licensed under the MIT License.

## Contact

For any issues or suggestions, feel free to reach out!

---
