import { useEffect, useRef } from 'react'
import Point2D from '../utils/Point2D'

interface Props {
  cursorPosition: Point2D
  onCursorPositionChanged: (position: Point2D) => void
}

export default function AnimatedCanvas({
  cursorPosition,
  onCursorPositionChanged,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const cursorPositionRef = useRef<Point2D>(cursorPosition);
  const lastRenderTimeRef = useRef<number>(Date.now());
  const revolvingCircleRotationRef = useRef<number>(0);

  const animationFrameRequestRef = useRef<number | null>(null);

  useEffect(() => {
    lastRenderTimeRef.current = Date.now();
    animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
    return () => {
      if (animationFrameRequestRef.current != null) {
        cancelAnimationFrame(animationFrameRequestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    cursorPositionRef.current = cursorPosition;
  }, [cursorPosition]);

  function renderFrame(): void {
    const context = canvasRef.current?.getContext('2d');
    if (context != null) {
      const timeNow = Date.now();
      const deltaTime = timeNow - lastRenderTimeRef.current;
      clearBackground(context);
      drawMainCircle(context, cursorPositionRef.current);
      drawRevolvingCircle(context, cursorPositionRef.current, deltaTime);
      lastRenderTimeRef.current = timeNow;
    }
    animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
  }

  function clearBackground(context: CanvasRenderingContext2D): void {
    const { width, height } = context.canvas;
    context.rect(0, 0, width, height);
    context.fillStyle = 'rgba(0, 0, 0)'
    context.fillStyle = 'rgba(0, 0, 0, 0)'
    context.fill()
  }

  function drawMainCircle(context: CanvasRenderingContext2D, position: Point2D): void {
    context.beginPath();
    context.arc(position.x, position.y, 10, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
  }

  function drawRevolvingCircle(
    context: CanvasRenderingContext2D,
    position: Point2D,
    deltaTime: number
  ): void {
    revolvingCircleRotationRef.current += deltaTime * 0.01;
    if (revolvingCircleRotationRef.current > 2 * Math.PI) {
      revolvingCircleRotationRef.current -= 2 * Math.PI;
    }
    const xOffset = 20 * Math.cos(revolvingCircleRotationRef.current);
    const yOffset = 20 * Math.sin(revolvingCircleRotationRef.current);
    context.beginPath();
    context.arc(position.x + xOffset, position.y + yOffset, 5, 0, Math.PI * 2);
    context.fillStyle = 'blue';
    context.fill();
  }

  function handleMouseMoved(event: React.MouseEvent<Element, MouseEvent>): void {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    const canvasBoundingRect = canvas.getBoundingClientRect();
    const cursorXPos = event.clientX - canvasBoundingRect.left;
    const cursorYPos = event.clientY - canvasBoundingRect.top;
    onCursorPositionChanged({ x: cursorXPos, y: cursorYPos });
  }

  return (
    <canvas ref={canvasRef} height={480} width={720} onMouseMove={handleMouseMoved}>
      Oops! Your browser doesn't support the canvas component.
    </canvas>
  );
}