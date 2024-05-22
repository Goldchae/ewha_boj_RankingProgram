import React, { useState } from "react";
import { useRouter } from "next/router";

const TogetherWrite = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    number: "",
    link: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(form);
    localStorage.setItem("posts", JSON.stringify(posts));
    router.push("/");
  };

  return (
    <div>
      <h1>함께 풀어요</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>핸들:</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>문제 번호:</label>
          <input
            name="number"
            value={form.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>문제 링크:</label>
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>제목 작성:</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>게시글 내용:</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};

export default TogetherWrite;
