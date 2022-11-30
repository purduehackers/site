import { useEffect, useRef } from 'react'
import { Context } from 'vm';
import Point2D from '../utils/Point2D'

interface Props {
  cursorPosition: Point2D
  onCursorPositionChanged: (position: Point2D) => void
}

class RandomParticle{
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  constructor(position: Point2D, maxVelocity = 20, maxAcceleration = -1) {
    this.x = position.x;
    this.y = position.y;

    this.vx = Math.floor(Math.random() * 2 * maxVelocity - maxVelocity);
    this.vy = Math.random() * 2 * maxVelocity - maxVelocity;
    this.ax = Math.random() * maxAcceleration;
    this.ay = Math.random() * maxAcceleration;
  }

  draw(context: CanvasRenderingContext2D){
    context.font = "300px Arial";
    context.strokeText("🌚", this.x, this.y);
  }

  move(dt: number) {
    let newVX = this.vx + this.ax * dt * 0.01;
    let newVY = this.vy + this.ay * dt * 0.01;

    // stop movement once velocity reaches zero
    if (this.vx == 0 || newVX * this.vx > 0) {
      this.vx = newVX;
    } else {
      this.vx = 0;
      this.ax = 0;
    }
    if (this.vy == 0 || newVY * this.vy > 0) {
      this.vy = newVY;
    } else {
      this.vy = 0;
      this.ay = 0;
    }

    this.x += this.vx * dt * 0.01;
    this.y += this.vy * dt * 0.01;
  }
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

  let circles: RandomParticle[] = [];
  for(let i = 0; i < 100; i++){
    let circle = new RandomParticle(cursorPositionRef.current)
    circles.push(circle)
  }

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
      context.canvas.width = document.documentElement.clientWidth
      context.canvas.height = document.documentElement.clientHeight
    
      const timeNow = Date.now()
      const deltaTime = timeNow - lastRenderTimeRef.current

      clearBackground(context)
      //drawMainCircle(context, cursorPositionRef.current)
      //drawRevolvingCircle(context, cursorPositionRef.current, deltaTime)
      circles[0].draw(context)
      circles[0].move(deltaTime)
      lastRenderTimeRef.current = timeNow
    }
    animationFrameRequestRef.current = requestAnimationFrame(renderFrame)
  }

  function clearBackground(context: CanvasRenderingContext2D): void {
    const { width, height } = context.canvas;
    context.rect(0, 0, width, height);
    context.fillStyle = 'rgba(0, 0, 0, 0)'
    context.fill()
  }

  function drawMainCircle(context: CanvasRenderingContext2D, position: Point2D): void {
    context.font = "300px Arial";
    //context.strokeText("🌚", position.x - 150, position.y + 100);
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
    context.strokeText("🌝", position.x - 150 + xOffset, position.y + 100 + yOffset);
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
    <canvas ref={canvasRef} onMouseMove={handleMouseMoved} 
        className="fixed inset-0 z-20">
      Oh no! Your browser does not support the HTML canvas component.
    </canvas>
  );
}