import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      requestRef.current = requestAnimationFrame(animateRing);
    };

    // 💡 이벤트 위임(Event Delegation) 방식 적용
    // DOM이 React에 의해 재렌더링 되더라도 호버 효과가 끊어지지 않습니다.
    const handleMouseOver = (e) => {
      // 마우스가 올라간 요소나 그 부모 중에 아래 태그/클래스가 있는지 확인
      if (e.target.closest('a, button, .mini-card, .project-card, .tech-group, .themeToggle')) {
        document.body.classList.add('hovering');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .mini-card, .project-card, .tech-group, .themeToggle')) {
        document.body.classList.remove('hovering');
      }
    };

    // window와 document 최상단에 이벤트를 걸어 하위 요소의 변화를 모두 감지
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div id="cursor">
        <div id="cursor-dot" ref={dotRef}></div>
      </div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;