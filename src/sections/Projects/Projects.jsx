import styles from './ProjectStyles.module.css';
import matrixImage from '../../assets/matrix.png';
import golImage from '../../assets/gameoflife.gif';
import ProjectCard from '../../Common/ProjectCard';
import huffmanCode from '../../assets/huffman.png';
import aimTrainer from '../../assets/target_red3.png';
import pongGame from '../../assets/PongGame-img.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={matrixImage}
          link={'https://github.com/pranavsrao6/Matrix-Arithmetic'}
          h3={'Matrix Arithmetic'}
          p={
            'Program with functions that perform matrix arithmetic such as Transpose, Inverse, Multiplication, and Gauss-Jordan Elimination'
          }
        />

        <ProjectCard
          src={golImage}
          link={'https://github.com/pranavsrao6/Game-Of-Life'}
          h3={"Conway's Game of Life Simulation"}
          p={
            'Program that simulates British Mathematician John Conway’s cellular automaton. Using a weighted union-find data structure, it simulated the evolution pattern of cells on a grid.'
          }
        />

        <ProjectCard
          src={huffmanCode}
          link={'https://github.com/pranavsrao6/Huffman-Code'}
          h3={'Huffman Code Encrpytion and Decryption'}
          p={
            'Program that encrypts and deciphers compressed data using the Huffman Code. Using a binary tree, it reads a .txt file and compresses the data'
          }
        />

        <ProjectCard
          src={pongGame}
          link={'https://github.com/pranavsrao6/Pong-Game'}
          h3={'Pong Game ReImagined'}
          p={
            'Personal reimagined version of the classic Atari Pong Game with visual and audio upgrades'
          }
        />

        <ProjectCard
          src={aimTrainer}
          link={'https://github.com/pranavsrao6/Aim-Trainer'}
          h3={'Aim Trainer Game'}
          p={
            'Simple Aim Trainer Game that helps improve mouse tracking skills. Within the pygame library, I used sprite classes for every object within the game'
          }
        />
      </div>
    </section>
  );
}

export default Projects;
