        const edit = document.querySelector('.edit');
        const run = document.querySelector('iframe');
        const btn = document.querySelector('button');


        const boilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<style>

</style>
<body>
    <h1>Welcome</h1>
    <p>This is a sample page</p>
</body>
</html>`;


        edit.textContent = boilerplate;

        // Function to update preview
        function updatePreview() {
            let html = edit.textContent; // Use textContent to get raw text
            // If content is empty, use boilerplate
            const content = html.trim() ? html : boilerplate;
            run.src = "data:text/html;charset=utf-8," + encodeURIComponent(content);
        }

        // Initial preview
        updatePreview();

        // Run on button click
        btn.addEventListener("click", updatePreview);

        // Real-time preview
        edit.addEventListener('input', updatePreview);