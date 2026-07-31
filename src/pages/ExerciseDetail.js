import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const detail = exerciseDetailData && typeof exerciseDetailData === 'object' ? exerciseDetailData : {};
      setExerciseDetail(detail);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${detail.name} exercise`, youtubeOptions);
      setExerciseVideos(Array.isArray(exerciseVideosData?.contents) ? exerciseVideosData.contents : []);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${detail.target}`, exerciseOptions);
      setTargetMuscleExercises(Array.isArray(targetMuscleExercisesData) ? targetMuscleExercisesData : []);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${detail.equipment}`, exerciseOptions);
      setEquipmentExercises(Array.isArray(equimentExercisesData) ? equimentExercisesData : []);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;