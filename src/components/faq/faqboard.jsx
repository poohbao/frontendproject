import React, { useState, useEffect } from 'react';
import { getAllFAQs, updateFAQ, deleteFAQ, createFAQ } from '../../api/faqApi'; // createFAQ 함수 추가
import styles from './faq.module.css';

const FaqBoard = () => {
  const [faqs, setFaqs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [faqsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [editing, setEditing] = useState(null); // 현재 수정 중인 FAQ 항목
  const [editFaq, setEditFaq] = useState({ question: '', answer: '' });
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' }); // 새로운 FAQ 항목

  useEffect(() => {
    loadFAQs();
  }, []);

  useEffect(() => {
    const pages = Math.ceil(faqs.length / faqsPerPage);
    setTotalPages(pages);
  }, [faqs, faqsPerPage]);

  const loadFAQs = async () => {
    const response = await getAllFAQs();
    setFaqs(response.data);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFaq({ ...editFaq, [name]: value });
  };

  const handleNewFaqChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  const handleEditSubmit = async (id) => {
    try {
      await updateFAQ(id, editFaq);
      setEditing(null);
      setEditFaq({ question: '', answer: '' }); // 입력 필드 초기화
      loadFAQs();
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const handleEdit = (faq) => {
    setEditing(faq.id);
    setEditFaq({ question: faq.question, answer: faq.answer });
  };

  const handleDelete = async (id) => {
    try {
      await deleteFAQ(id);
      loadFAQs();
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const handleAdd = async () => {
    try {
      await createFAQ(newFaq);
      setNewFaq({ question: '', answer: '' }); // 입력 필드 초기화
      loadFAQs();
    } catch (error) {
      console.error("Error adding FAQ:", error);
    }
  };

  const indexOfLastFaq = currentPage * faqsPerPage;
  const indexOfFirstFaq = indexOfLastFaq - faqsPerPage;
  const currentFaqs = faqs.slice(indexOfFirstFaq, indexOfLastFaq);

  return (
    <>
    <header className={styles.header}>
    <h1>FAQ 게시판</h1>
  </header>
    <div className={styles.tableposition}>
      <div>
        <input
          type="text"
          name="question"
          value={newFaq.question}
          placeholder="질문"
          onChange={handleNewFaqChange}
        />
        <input
          type="text"
          name="answer"
          value={newFaq.answer}
          placeholder="답변"
          onChange={handleNewFaqChange}
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>질문</th>
            <th>답변</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {currentFaqs.map((faq, index) => (
            <tr key={faq.id}>
              <td>{indexOfFirstFaq + index + 1}</td>
              <td>
                {editing === faq.id ? (
                  <input
                    type="text"
                    name="question"
                    value={editFaq.question}
                    onChange={handleEditChange}
                  />
                ) : (
                  faq.question
                )}
              </td>
              <td>
                {editing === faq.id ? (
                  <input
                    type="text"
                    name="answer"
                    value={editFaq.answer}
                    onChange={handleEditChange}
                  />
                ) : (
                  faq.answer
                )}
              </td>
              <td>
                {editing === faq.id ? (
                  <button onClick={() => handleEditSubmit(faq.id)}>저장</button>
                ) : (
                  <button onClick={() => handleEdit(faq)}>수정</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(faq.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

// ../components/faq/faqboard.jsx
export { FaqBoard };
