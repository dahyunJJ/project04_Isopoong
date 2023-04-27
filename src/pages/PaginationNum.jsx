import Pagination from "react-bootstrap/Pagination";

function PaginationNum({
  setCurrentData,
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
  onPageChange,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = pageNumbers.slice(startIndex, endIndex);

  const MAX_PAGES_TO_SHOW = 10; // 최대 페이지 수
  const GROUP_SIZE = 10; // 그룹당 페이지 수
  let pageGroups = [];
  if (totalPages <= MAX_PAGES_TO_SHOW) {
    // 페이지 수가 MAX_PAGES_TO_SHOW 이하인 경우에는 전체 페이지를 표시합니다.
    for (let i = 1; i <= totalPages; i++) {
      pageGroups.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  } else {
    const activeGroup = Math.floor((currentPage - 1) / GROUP_SIZE);
    // 현재 그룹에서 시작하는 페이지
    const startPage = activeGroup * GROUP_SIZE + 1;
    // 현재 그룹에서 끝나는 페이지
    const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

    // 현재 그룹 이전의 페이지
    const prevGroup = [];
    if (activeGroup !== 0) {
      prevGroup.push(
        <Pagination.Item
          key="prevGroup"
          onClick={() => setCurrentPage((activeGroup - 1) * GROUP_SIZE + 1)}
        >
          {"이전"}
        </Pagination.Item>
      );
    }

    // 현재 그룹의 페이지
    const currentGroup = [];
    for (let i = startPage; i <= endPage; i++) {
      currentGroup.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // 현재 그룹 이후의 페이지
    const nextGroup = [];
    if (activeGroup !== Math.floor(totalPages / GROUP_SIZE)) {
      nextGroup.push(
        <Pagination.Item
          key="nextGroup"
          onClick={() => setCurrentPage((activeGroup + 1) * GROUP_SIZE + 1)}
        >
          {"다음"}
        </Pagination.Item>
      );
    }

    pageGroups = [...prevGroup, ...currentGroup, ...nextGroup];
  }

  return (
    <div>
      <div>
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} />
          <Pagination.Prev
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          />
          {pageGroups}
          <Pagination.Next
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
          />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
}

export default PaginationNum;
