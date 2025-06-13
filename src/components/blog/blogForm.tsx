"use client";

export default function BlogForm() {
  return (
    <div className="text-white pt-16">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Summary
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">Tag</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Reading Time (minutes)
          </label>
          <input
            type="number"
            value={readingTime}
            onChange={(e) => setReadingTime(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Content
          </label>
          <div className="flex items-center mb-2">
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value as ContentType)}
              className="mr-2 p-2 border border-gray-300 rounded-md text-black"
            >
              <option value="PARAGRAPH">Paragraph</option>
              <option value="IMAGE">Image</option>
              <option value="CODE_BLOCK">Code Block</option>
              <option value="LINK">Link</option>
            </select>
            <input
              type="text"
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={addContent}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add
            </button>
          </div>
          <div className="mt-2 text-white">
            {content.map((c, index) => (
              <div
                key={index}
                className="mb-2 p-2 border border-gray-200 rounded-md"
              >
                <strong>{c.type}:</strong> {c.data.text}
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
